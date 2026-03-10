import { definePlugin } from "vencord";

export default definePlugin({
    name: "KeepGifPickerOpen",
    description: "Prevents the Discord GIF picker from closing after sending a GIF.",
    authors: [
        {
            name: "pacxwheaa",
            id: "0"
        }
    ],
    patches: [
        {
            find: "onSelectGIF",
            replacement: {
                match: /([A-Za-z0-9_$]+\.)?closeExpressionPicker\(\)/g,
                replace: "void 0"
            }
        },
        {
            find: "GIF_PICKER_RESULT_CLICK",
            replacement: {
                match: /([A-Za-z0-9_$]+\.)?closePopout\(\)/g,
                replace: "void 0"
            }
        },
        {
            find: "sendGIF",
            replacement: {
                match: /([A-Za-z0-9_$]+\.)?closeExpressionPicker\(\)/g,
                replace: "void 0"
            }
        }
    ]
});
