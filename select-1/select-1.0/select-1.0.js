document.addEventListener("DOMContentLoaded", function(){
            tail.select("#select-simples-1", {
                locale: "pt_BR",
                search: true,
                descriptions: true,
                deselect: true,
            });
            tail.select("#select-simples-2", {
                locale: "pt_BR",
                search: true,
                descriptions: true,
                deselect: true
            });
            tail.select("#select-multiplo-1", {
                locale: "pt_BR",
                search: true,
                descriptions: true,
                multiLimit: 3
            });
            tail.select("#select-multiplo-2", {
                locale: "pt_BR",
                search: true,
                descriptions: true,
                multiLimit: 3,
                hideSelected: true,
                hideDisabled: true,
                multiShowCount: false,
                multiContainer: '.caixa-multiselecoes'
            });
            tail.select("#select-multiplo-3", {
                locale: "pt_BR",
                search: true,
                descriptions: true,
                multiLimit: 3,
                hideSelected: true,
                hideDisabled: true,
                multiShowCount: false,
                multiContainer: true
            });
        });