import secrets

# Generate a 64-character (256-bit) hex string
SECRET_KEY = secrets.token_hex(32)

# Print the generated key
print(SECRET_KEY)
