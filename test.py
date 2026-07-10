import requests
from bs4 import BeautifulSoup

def get_table_array(url):
    response = requests.get(url)

    # Use BeautifulSoup to extract the table HTML from the HTML in the response
    parsed_object = BeautifulSoup(response.text, 'html.parser')
    table_html = parsed_object.find('table')
    
    # Create an array of arrays with the data in the table
    # This will make the data easier to work with later
    table = []
    rows = table_html.find_all('tr')
    for row in rows:
        columns = row.find_all(['th', 'td'])
        table.append([column.text for column in columns])

    return table

def create_unicode_array(table_array):
    unicode_array = []
    for unicode_char in table_array:

        # Check if the coordinate is a number - table headers are not numbers
        if unicode_char[0].isdigit() and unicode_char[2].isdigit():
            x_coord = int(unicode_char[0])
            y_coord = int(unicode_char[2])
            character = unicode_char[1]

            # If there is no subarray corresponding to this y coordinate, add subarrays until there is one
            # Each subarray represents a row
            while len(unicode_array) <= y_coord+1:
                unicode_array.append([' ' for x in range(x_coord+1)])

            # If there is no value in the subarray corresponding to this x coordinate, fill the subarray until there is one
            # Each value represents a column
            while len(unicode_array[y_coord]) <= x_coord+1:
                unicode_array[y_coord].append(' ')
            
            # Add the unicode character to its corresponding spot in the final array
            unicode_array[y_coord][x_coord] = character

    return unicode_array

def print_unicode(url):
    table = get_table_array(url)
    array = create_unicode_array(table)

    # Reverse the unicode array, since we want 0,0 to be in the bottom right corner
    for row in reversed(array):
        string_row = ""
        for col in row:
            string_row += col
        print(string_row)

url = 'https://docs.google.com/document/d/e/2PACX-1vQGUck9HIFCyezsrBSnmENk5ieJuYwpt7YHYEzeNJkIb9OSDdx-ov2nRNReKQyey-cwJOoEKUhLmN9z/pub'

print_unicode(url)
