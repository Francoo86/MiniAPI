import os
from dotenv import load_dotenv

load_dotenv()

MY_ENV_VAR = os.getenv('DB_HOST')

print(MY_ENV_VAR)
