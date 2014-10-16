fieldsetFlex
============

Plugin fieldsetFlex. Um fieldset flexível.

Um exemplo de configuração sem parametrização:

$('#fd').fieldsetFlex();

Para usar o plugin é necessário ter algumas classes CSS:

.controle-expandir-fildset{
	position: relative;
	left: 10px;
	top: -30px;
}
.controle-retrair-fildset{
	position: relative;
	left: 10px;
	top: -30px;
}

.fieldset-expandido .controle-expandir-fildset{
	display: none;
}

.fieldset-retraido .controle-expandir-fildset{
	display: block;
}

.fieldset-expandido .controle-retrair-fildset{
	display: block;
}

.fieldset-retraido .controle-retrair-fildset{
	display: none;
}

Após ter refereciado o script no HTML já será possível usá-lo.

Existem 3 parametrizações no fieldsetFlex:

duration - pode ser definida em número ou string, por padrão é 'slow'. Configura a velocidade do efeito.
initState - string 'retraido' ou 'expandido', por padrão é 'retraido'. Configura o state inicial.
callback - uma função que será executada após ser expandido ou retraido.
