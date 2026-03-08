#!/usr/bin/env python3
import re

def convert_mysql_to_postgres_clean():
    with open('/Users/mbpro14/dump-dailychineseclass-202512271510.sql', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove MySQL specific comments
    content = re.sub(r'/\*![0-9]{5}.*?\*/', '', content, flags=re.MULTILINE)
    content = re.sub(r'SET NAMES utf8mb4;', '', content)
    content = re.sub(r'SET @OLD_.*?=.*?;', '', content, flags=re.MULTILINE)
    
    # Remove LOCK TABLES and UNLOCK TABLES
    content = re.sub(r'LOCK TABLES.*?;', '', content, flags=re.MULTILINE)
    content = re.sub(r'UNLOCK TABLES.*?;', '', content, flags=re.MULTILINE)
    
    # Remove all KEY constraints including foreign keys
    content = re.sub(r'  KEY \w+ \(\w+\),?\n?', '', content, flags=re.MULTILINE)
    content = re.sub(r'  KEY \w+ \(\w+\)', '', content, flags=re.MULTILINE)
    content = re.sub(r'  FOREIGN KEY \([^)]+\) REFERENCES [^)]+\),?\n?', '', content, flags=re.MULTILINE)
    
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
    
    # Remove duplicate PRIMARY KEY
    content = re.sub(r',\s*PRIMARY KEY \(id\)', '', content, flags=re.MULTILINE)
    content = re.sub(r'PRIMARY KEY \(id\),\s*', '', content, flags=re.MULTILINE)
    
    # Convert ENGINE=InnoDB
    content = re.sub(r'ENGINE=InnoDB.*?;', ';', content, flags=re.MULTILINE)
    
    # Clean up INSERT statements
    content = re.sub(r'\),\s*\n\s*\(', '),\n(', content)
    
    # Remove problematic characters
    content = re.sub(r"'\s*\n\s*'", "''", content)
    content = re.sub(r"'\s*\n\s*\(", "', (", content)
    
    # Remove extra semicolons and empty lines
    content = re.sub(r';\s*;', ';', content)
    content = re.sub(r'\n\s*\n', '\n', content)
    content = re.sub(r'^\s*;\s*$', '', content, flags=re.MULTILINE)
    
    with open('dump-postgresql-clean.sql', 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("✅ Clean conversion complete! File: dump-postgresql-clean.sql")

if __name__ == "__main__":
    convert_mysql_to_postgres_clean()
