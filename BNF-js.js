const grammar = `
<program> ::= <statement> | <statement> <program>

<statement> ::= <declaration> | <expression> ";"

<declaration> ::= <var_declaration> | <function_declaration> | <class_declaration>

<var_declaration> ::= "var" <identifier> "=" <expression> ";" 
                    | "let" <identifier> "=" <expression> ";" 
                    | "const" <identifier> "=" <expression> ";"

<function_declaration> ::= "function" <identifier> "(" <parameters> ")" "{" <block> "}"

<class_declaration> ::= "class" <identifier> "{" <class_body> "}"

<block> ::= <statement> | <statement> <block>

<expression> ::= <arithmetic_expression> 
               | <boolean_expression> 
               | <function_call> 
               | <identifier> 
               | <literal>

<arithmetic_expression> ::= <term> 
                          | <term> "+" <arithmetic_expression> 
                          | <term> "-" <arithmetic_expression>

<term> ::= <factor> 
         | <factor> "*" <term> 
         | <factor> "/" <term>

<factor> ::= <literal> 
           | <identifier> 
           | "(" <arithmetic_expression> ")"

<boolean_expression> ::= <comparison_expression> 
                       | <logical_expression>

<comparison_expression> ::= <expression> <comparison_operator> <expression>

<comparison_operator> ::= "==" 
                        | "!=" 
                        | ">" 
                        | ">=" 
                        | "<" 
                        | "<="

<logical_expression> ::= <expression> <logical_operator> <expression>

<logical_operator> ::= "&&" 
                     | "||" 
                     | "!"

<function_call> ::= <identifier> "(" <arguments> ")"

<identifier> ::= <letter> 
               | <letter> <identifier>

<literal> ::= <number> 
            | <string> 
            | <boolean>

<number> ::= <digit> 
           | <digit> <number>

<string> ::= '"' <characters> '"' 
           | "'" <characters> "'"

<boolean> ::= "true" 
            | "false"

<class_body> ::= <method_declaration> 
               | <method_declaration> <class_body>

<method_declaration> ::= <identifier> "(" <parameters> ")" "{" <block> "}"
`;

console.log(grammar);
