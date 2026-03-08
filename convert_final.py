#!/usr/bin/env python3
import re

def convert_mysql_to_postgres_final():
    with open('/Users/mbpro14/dump-dailychineseclass-202512271510.sql', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove MySQL specific comments
    content = re.sub(r'/\*![0-9]{5}.*?\*/', '', content, flags=re.MULTILINE)
    content = re.sub(r'SET NAMES utf8mb4;', '', content)
    content = re.sub(r'SET @OLD_.*?=.*?;', '', content, flags=re.MULTILINE)
    
    # Remove LOCK TABLES
    content = re.sub(r'LOCK TABLES.*?;', '', content, flags=re.MULTILINE)
    content = re.sub(r'UNLOCK TABLES.*?;', '', content, flags=re.MULTILINE)
    
    # Remove KEY constraints
    content = re.sub(r'  KEY \w+ \(\w+\),?\n?', '', content, flags=re.MULTILINE)
    
    # Convert data types
    content = re.sub(r'int NOT NULL AUTO_INCREMENT', 'SERIAL PRIMARY KEY', content)
    content = re.sub(r'int AUTO_INCREMENT', 'SERIAL', content)
    content = re.sub(r'int DEFAULT NULL', 'INTEGER', content)
    content = re.sub(r'int NOT NULL', 'INTEGER NOT NULL', content)
    content = re.sub(r'varchar\(\d+\)', 'VARCHAR(255)', content)
    content = re.sub(r'datetime', 'TIMESTAMP', content)
    content = re.sub(r'text', 'TEXT', content)
    content = re.sub(r'longtext', 'TEXT', content)
    content = re.sub(r'tinyint\(1\)', 'BOOLEAN', content)
    
    # Remove backticks
    content = content.replace('`', '')
    
    # Convert ENGINE=InnoDB
    content = re.sub(r'ENGINE=InnoDB.*?;', ';', content, flags=re.MULTILINE)
    
    # Fix INSERT statements - clean up line breaks
    content = re.sub(r'\),\s*\n\s*\(', '),\n(', content)
    
    # Remove problematic characters in data
    lines = content.split('\n')
    clean_lines = []
    for line in lines:
        if line.strip().startswith('INSERT INTO'):
            # Fix INSERT statements with problematic data
            line = re.sub(r"'\s*\n\s*'", "''", line)  # Fix line breaks in strings
            line = re.sub(r"'\s*\n\s*\(", "', (", line)  # Fix line breaks before values
        clean_lines.append(line)
    
    content = '\n'.join(clean_lines)
    
    # Remove empty lines
    content = re.sub(r'\n\s*\n', '\n', content)
    
    with open('dump-postgresql-final.sql', 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("✅ Conversion complete! File: dump-postgresql-final.sql")

if __name__ == "__main__":
    convert_mysql_to_postgres_final()
