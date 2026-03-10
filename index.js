module.exports = {
    name: "KeepGifPickerOpen",
    description: "Keeps the GIF picker open after sending a GIF",

    start() {
        this.listener = (e) => {
            const target = e.target;
            if (!target) return;

            const gif = target.closest("[class*=gif]");
            const picker = document.querySelector("[class*=gifPicker]");

            if (gif && picker) {
                e.stopPropagation();
            }
        };

        document.addEventListener("click", this.listener, true);
    },

    stop() {
        document.removeEventListener("click", this.listener, true);
    }
};