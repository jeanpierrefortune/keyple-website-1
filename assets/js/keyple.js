/*
Thanks to Danny Guo
https://www.dannyguo.com/blog/how-to-add-copy-to-clipboard-buttons-to-code-blocks-in-hugo/
*/
// function addCopyButtons(clipboard) {
//     document.querySelectorAll('pre > code').forEach(function (codeBlock) {
//         if (codeBlock.classList.contains('language-java')
//             || codeBlock.classList.contains('language-kt')
//             || codeBlock.classList.contains('language-kotlin')
//             || codeBlock.classList.contains('language-cpp')
//             || codeBlock.classList.contains('language-gradle')) {
//             const button = document.createElement('button');
//             button.className = 'copy-code-button';
//             button.type = 'button';
//             button.innerText = 'Copy';
//             button.addEventListener('click', function () {
//                 clipboard.writeText(codeBlock.innerText).then(function () {
//                     /* Chrome doesn't seem to blur automatically,
//                        leaving the button in a focused state. */
//                     button.blur();
//                     button.innerText = 'Copied!';
//                     setTimeout(function () {
//                         button.innerText = 'Copy';
//                     }, 2000);
//                 }, function (error) {
//                     button.innerText = 'Error';
//                 });
//             });
//             const pre = codeBlock.parentNode;
//             if (pre.parentNode.classList.contains('highlight')) {
//                 const highlight = pre.parentNode;
//                 highlight.parentNode.insertBefore(button, highlight.nextSibling);
//             } else {
//                 pre.parentNode.insertBefore(button, pre.nextSibling);
//             }
//         }
//     });
// }
//
// if (navigator && navigator.clipboard) {
//     addCopyButtons(navigator.clipboard);
// } else {
//     const script = document.createElement('script');
//     script.src = 'https://cdnjs.cloudflare.com/ajax/libs/clipboard-polyfill/2.7.0/clipboard-polyfill.promise.js';
//     script.integrity = 'sha256-waClS2re9NUbXRsryKoof+F9qc1gjjIhc2eT7ZbIv94=';
//     script.crossOrigin = 'anonymous';
//     script.onload = function () {
//         addCopyButtons(clipboard);
//     };
//     document.body.appendChild(script);
// }
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip({
        html: true
    });
});