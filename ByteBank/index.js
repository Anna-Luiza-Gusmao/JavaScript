import {Cliente} from "./Cliente.js"
import { Gerente } from "./Funcionarios/Gerente.js"
import { Diretor } from "./Funcionarios/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const gerente = new Gerente("Ricardo", 10000, 12345698700);
gerente.cadastrarSenha("123456");
const diretor = new Diretor("Luana", 5000, 35246548712);
diretor.cadastrarSenha("123456789");
const cliente = new Cliente("Vinicius", 211548558, "521");

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123456");
console.log(gerenteEstaLogado);

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789");
console.log(diretorEstaLogado);

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "521");
console.log(clienteEstaLogado);