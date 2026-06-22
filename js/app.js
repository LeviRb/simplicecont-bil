// TELEFONE
const telefone = document.getElementById("telefone");

if (telefone) {
    telefone.addEventListener("input", function () {

        let valor = this.value.replace(/\D/g, "");

        valor = valor.slice(0, 11);

        if (valor.length > 10) {
            valor = valor.replace(
                /^(\d{2})(\d{5})(\d{4}).*/,
                "($1) $2-$3"
            );
        } else {
            valor = valor.replace(
                /^(\d{2})(\d{4})(\d{0,4}).*/,
                "($1) $2-$3"
            );
        }

        this.value = valor;
    });
}

// SÓCIOS
const socios = document.getElementById("socios");

if (socios) {
    socios.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "");
    });
}

// ParteFATURAMENTO
const faturamento = document.getElementById("faturamento");

if (faturamento) {
    faturamento.addEventListener("input", function () {

        let valor = this.value.replace(/\D/g, "");

        if (valor === "") {
            this.value = "";
            return;
        }

        valor = (Number(valor) / 100).toLocaleString(
            "pt-BR",
            {
                style: "currency",
                currency: "BRL"
            }
        );

        this.value = valor;
    });
}