import { definePlugin } from "vencord";

export default definePlugin({
    name: "KeepGifPickerOpen",
    description: "Prevents the Discord GIF picker from closing after sending a GIF.",
    authors: [
        {
            name: "pacxwheaa",
            id: "0" // Vencord standartlarında buraya Discord ID'si yazılır. Gizlilik için "0" olarak bırakıldı.
        }
    ],
    patches: [
        {
            // GIF seçimi yapıldığında çalışan temel fonksiyonu bulur
            find: "onSelectGIF",
            replacement: {
                // Menüyü kapatan fonksiyonu bulup etkisiz hale getirir
                match: /([a-zA-Z0-9_]+\.)?closeExpressionPicker\(\)/g,
                replace: "/* KeepGifPickerOpen eklentisi tarafından engellendi */"
            }
        },
        {
            // Alternatif olarak GIF Grid (Arama Sonuçları) üzerindeki tıklama olaylarını hedefler
            find: "GIF_PICKER_RESULT_CLICK",
            replacement: {
                match: /([a-zA-Z0-9_]+\.)?closePopout\(\)/g,
                replace: "/* KeepGifPickerOpen eklentisi tarafından engellendi */"
            }
        }
    ]
});