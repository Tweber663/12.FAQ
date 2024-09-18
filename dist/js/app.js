"use strict";
const buttons = document.querySelectorAll('button');
Array.from(buttons).forEach((btn) => btn.addEventListener('click', () => { var _a; return (_a = btn.parentElement) === null || _a === void 0 ? void 0 : _a.classList.toggle('active'); }));
//# sourceMappingURL=app.js.map