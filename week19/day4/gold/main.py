def get_full_name(**data):
    print(' '.join([i for i in data.values()]))

get_full_name(first_name="john", middle_name="hooker", last_name="lee")
get_full_name(first_name="bruce", last_name="lee")


MORSE_CODE_DICT = { 'A':'.-', 'B':'-...',
                   'C':'-.-.', 'D':'-..', 'E':'.',
                   'F':'..-.', 'G':'--.', 'H':'....',
                   'I':'..', 'J':'.---', 'K':'-.-',
                   'L':'.-..', 'M':'--', 'N':'-.',
                   'O':'---', 'P':'.--.', 'Q':'--.-',
                   'R':'.-.', 'S':'...', 'T':'-',
                   'U':'..-', 'V':'...-', 'W':'.--',
                   'X':'-..-', 'Y':'-.--', 'Z':'--..',
                   '1':'.----', '2':'..---', '3':'...--',
                   '4':'....-', '5':'.....', '6':'-....',
                   '7':'--...', '8':'---..', '9':'----.',
                   '0':'-----', ', ':'--..--', '.':'.-.-.-',
                   '?':'..--..', '/':'-..-.', '-':'-....-',
                   '(':'-.--.', ')':'-.--.-', ' ':'/'}


def translator(text):
    result = ''
    for i in text.upper():
        result += MORSE_CODE_DICT[i] + '  '
    return result
print(translator('Hello fefe'))

def morsetrans(morse):
    result = ''
    morse = morse.split(' ')
    for i in morse:
        for key, value in MORSE_CODE_DICT.items():
            if value == i: result += key
    return result

print(morsetrans("....  .  .-..  .-..  ---  /  ..-.  .  ..-.  .  "))

