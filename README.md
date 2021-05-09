# caesar cipher RSS Task 1
# how to use?

## clone repo
## npm i

## commands
-a, --action [type] action (encode or decode)
-s --shift <number> shift
-i --input <filename> input file path
-o --output <filename> output file path

# Example

1) create input.txt file in root
2) enter text
3) for encode
## node index.js -a encode -s 7 -i "./input.txt" -o "./output.txt"
4) for decode
## node index.js -a decode -s 7 -i "./output.txt" -o "./decode.txt"