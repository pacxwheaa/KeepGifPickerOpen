import definePlugin from "@utils/types";

const disablePickerCloseRe = /(?:\w+\.)?(?:closeExpressionPicker|closePopout)\([^)]*\)/g;

export default definePlugin({
    name: "KeepGifPickerOpen",
    description: "Prevents the Discord GIF picker from closing after sending a GIF.",
    authors: [
        {
            name: "pacxwheaa",
            id: 0n
        }
    ],
    patches: [
        {
            find: "GIF_PICKER_RESULT_CLICK",
            replacement: {
                match: disablePickerCloseRe,
                replace: "void 0"
            }
        },
        {
            find: "onSelectGIF",
            replacement: {
                match: disablePickerCloseRe,
                replace: "void 0"
            }
        },
        {
            find: "sendGIF",
            replacement: {
                match: disablePickerCloseRe,
                replace: "void 0"
            }
        },
        {
            find: "setExpressionPickerView",
            replacement: {
                match: /\breturn\s+(?:\w+\.)?(?:closeExpressionPicker|closePopout)\([^)]*\)/g,
                replace: "return void 0"
            }
        }
    ]
});
