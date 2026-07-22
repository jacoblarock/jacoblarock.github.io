import json
import os

import markdown

# markdown files that are not site pages
NON_PAGE_MD = {"README.md"}


def collect_pages() -> tuple[list[str], list[str]]:
    names = []
    pages = []
    for filename in sorted(os.listdir()):
        if filename.endswith(".html"):
            with open(filename, "r") as file:
                content = file.read()
        elif filename.endswith(".md") and filename not in NON_PAGE_MD:
            with open(filename, "r") as file:
                content = markdown.markdown(file.read())
        else:
            continue
        names.append(filename.rsplit(".", 1)[0])
        pages.append(content)
    return names, pages


def write_json(pages: list, filename: str):
    with open(filename, "w") as file:
        file.write(json.dumps(pages))


if __name__ == "__main__":
    names, pages = collect_pages()
    write_json(names, "names.json")
    write_json(pages, "pages.json")
