// Arquivo: src/MODELS/TorreControle.js

/**
 * Classe que representa a torre de controle dentro do aeroporto.
 * É o órgão central de segurança responsável por gerenciar pousos, decolagens e o tráfego de aeronaves no solo e nas proximidades do aeródromo.
 */
class TorreControle {
    
    /**
     * O método construtor é chamado quando um avião chega ou saí do aeroporto.
     * @param {string} quatidadeAviões - O número total de aviões no aeroporto.
     * @param {string} quantideAviõesDecolados - O número de aviões em voo.
     * @param {string} quantidadeAviõesPousados - O número de aviões dentro do aeroporto.
     */
    constructor(quatidadeAviões, quantideAviõesDecolados, quantidadeAviõesPousados) {
        // Atributos de identificação
        this.quatidadeAviões = quatidadeAviões;
        this.quantideAviõesDecolados = quantideAviõesDecolados;
        this.quantidadeAviõesPousados = quantidadeAviõesPousados;
        
        // Atributo de estado: Todo TorreControle começa fora da área de embarque
        this.detectouPlane = false; 
    }

    /**
     * Método responsável por simular a saída/chegada de um Plane.
     * Ação: Muda o status da tower of control para indicar que ela detect0ou um Plane.
     */
    realizarCheckInDetectou() {
        this.detectouPlane = true;
        console.log(`Torre de controle detectou que ${this.quantideAviõesDecolados} decolaram hoje.`);
    }

    /**
     * Método para atualizar os dados do TorreControle caso haja erro de digitação.
     * @param {string} novoquatidadeAviões - O quatidadeAviões corrigido.
     */
    corrigirquatidadeAviões(novoquatidadeAviões) {
        this.quatidadeAviões = novoquatidadeAviões;
        console.log(`quatidadeAviões atualizado para: ${this.quatidadeAviões}`);
    }
}

// Exporta a classe para ser usada em outros arquivos (Modularização)
export default TorreControle;
