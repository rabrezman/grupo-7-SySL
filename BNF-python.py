
bnf_grammar = """
<programa> ::= <instrucción> | <instrucción> <programa>

<instrucción> ::= <declaración> | <expresión>

<declaración> ::= <declaración_de_asignación> | <declaración_de_función> | <declaración_de_clase>

<declaración_de_asignación> ::= <identificador> "=" <expresión>

<declaración_de_función> ::= "def" <identificador> "(" <parametros> ")" ":" <bloque>

<declaración_de_clase> ::= "class" <identificador> ":" <bloque>

<bloque> ::= <instrucción> | <instrucción> <bloque>

<expresión> ::= <expresión_aritmética> | <expresión_booleana> | <llamada_a_función> | <identificador> | <literal>

<expresión_aritmética> ::= <termino> | <termino> "+" <expresión_aritmética> | <termino> "-" <expresión_aritmética>

<termino> ::= <factor> | <factor> "*" <termino> | <factor> "/" <termino>

<factor> ::= <literal> | <identificador> | "(" <expresión_aritmética> ")"

<expresión_booleana> ::= <expresión_comparativa> | <expresión_logica>

<expresión_comparativa> ::= <expresión> <operador_comparativo> <expresión>

<operador_comparativo> ::= "==" | "!=" | ">" | ">=" | "<" | "<="

<expresión_logica> ::= <expresión> <operador_logico> <expresión>

<operador_logico> ::= "and" | "or" | "not"

<llamada_a_función> ::= <identificador> "(" <argumentos> ")"

<identificador> ::= <letra> | <letra> <identificador>

<literal> ::= <numero> | <cadena>

<numero> ::= <digito> | <digito> <numero>

<cadena> ::= '"' <caracteres> '"' | "'" <caracteres> "'"
"""

# Save to a file
file_path = './simplified_python_bnf.txt'
with open(file_path, 'w') as file:
    file.write(bnf_grammar)

file_path
