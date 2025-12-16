# Intro

This tool allows a local "docs" directory to function as a semi-CMS for the Convex database.
All commands are performed in the root folder where the `doc` is located. (i.e. `./docs` will be its relative path)

# commands

## course sync

`btree-sync courses`

This calls the `API_ENDPONT/get_courses` to retrieve all courses information, which will be provided in the following json format:
