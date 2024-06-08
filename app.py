from flask import Flask, request, render_template, jsonify
import pytesseract
from PIL import Image
import re

app = Flask(__name__)

def extract_text_from_image(image_path):
    return pytesseract.image_to_string(Image.open(image_path))

def extract_financial_data(text):
    income_pattern = r"Annual Income:\s*\$?([\d,]+)"
    income_match = re.search(income_pattern, text)
    
    if income_match:
        annual_income = int(income_match.group(1).replace(',', ''))
    else:
        annual_income = None

    return {
        'annual_income': annual_income,
        # Add other metrics here
    }

def calculate_loan_eligibility(financial_data):
    annual_income = financial_data['annual_income']
    # Add other financial metrics here

    # Simple example of loan eligibility calculation
    if annual_income >= 50000:
        loan_range = (10000, 50000)
    elif annual_income >= 30000:
        loan_range = (5000, 30000)
    else:
        loan_range = (1000, 10000)
    
    return loan_range

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/walkthrough')
def walkthrough():
    return render_template('walkthrough.html')

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']
    text = extract_text_from_image(file)
    financial_data = extract_financial_data(text)
    loan_range = calculate_loan_eligibility(financial_data)
    
    return jsonify({
        'loan_range': f"${loan_range[0]} - ${loan_range[1]}",
        'financial_data': financial_data
    })

if __name__ == '__main__':
    app.run()
