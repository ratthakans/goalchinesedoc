#!/usr/bin/env python3
import re
import sys

def convert_mysql_to_postgres(input_file, output_file):
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove MySQL specific comments and settings
    content = re.sub(r'/\*![0-9]{5}.*?\*/', '', content, flags=re.MULTILINE)
    content = re.sub(r'SET NAMES utf8mb4;', '', content)
    content = re.sub(r'SET @OLD_.*?=.*?;', '', content, flags=re.MULTILINE)
    
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
    content = re.sub(r'TINYINT\(1\)', 'BOOLEAN', content)
    
    # Remove backticks
    content = content.replace('`', '')
    
    # Convert ENGINE=InnoDB to PostgreSQL
    content = re.sub(r'ENGINE=InnoDB.*?;', ';', content, flags=re.MULTILINE)
    
    # Remove MySQL specific functions
    content = re.sub(r'DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP', 'DEFAULT CURRENT_TIMESTAMP', content)
    
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Converted {input_file} to {output_file}")

if __name__ == "__main__":
    convert_mysql_to_postgres('dump-dailychineseclass-202512271510.sql', 'dump-postgresql.sql')
