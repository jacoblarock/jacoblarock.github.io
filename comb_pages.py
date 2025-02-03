import json
import os

def get_names() -> list:
    out = []
    files = os.listdir()
    for filename in files:
        if filename[-4:] == "html":
            out.append(filename[:-4])
    return out

def get_pages() -> list:
    out = []
    files = os.listdir()
    for filename in files:
        if filename[-4:] == "html":
            with open(filename, "r") as file:
                out.append(file.read())
    return out

def write_json(pages: list, filename: str):
    with open(filename, "w") as file:
        file.write(json.dumps(pages))

if __name__ == "__main__":
    names = get_names()
    pages = get_pages()
    write_json(names, "names.json")
    write_json(pages, "pages.json")
