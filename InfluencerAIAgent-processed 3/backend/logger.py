import logging
import os

# Define basic logging configuration
logging.basicConfig(filename=os.path.join('logs', 'app.log'),
                    filemode='a',
                    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
                    level=logging.INFO)

# Create a custom logger
logger = logging.getLogger(__name__)

# Create handlers
file_handler = logging.FileHandler(os.path.join('logs', 'app.log'))
console_handler = logging.StreamHandler()

# Set level for handlers
file_handler.setLevel(logging.INFO)
console_handler.setLevel(logging.ERROR)

# Create formatters and add it to handlers
file_format = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
console_format = logging.Formatter('%(name)s - %(levelname)s - %(message)s')
file_handler.setFormatter(file_format)
console_handler.setFormatter(console_format)

# Add handlers to the logger
logger.addHandler(file_handler)
logger.addHandler(console_handler)

# Create 'logs' directory if it does not exist
if not os.path.exists('logs'):
    os.makedirs('logs')


# Usage:
# To log within application modules, import the logger defined here and use it like so:
# from logger import logger
# logger.info('Info message')
# logger.error('Error message')