import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

class MyLibService {
    constructor() { }
}
MyLibService.ɵfac = function MyLibService_Factory(t) { return new (t || MyLibService)(); };
MyLibService.ɵprov = ɵɵdefineInjectable({ token: MyLibService, factory: MyLibService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MyLibService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class MyLibComponent {
    constructor() { }
    ngOnInit() {
    }
}
MyLibComponent.ɵfac = function MyLibComponent_Factory(t) { return new (t || MyLibComponent)(); };
MyLibComponent.ɵcmp = ɵɵdefineComponent({ type: MyLibComponent, selectors: [["ml-my-lib"]], decls: 2, vars: 0, template: function MyLibComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, " my-lib works! ");
        ɵɵelementEnd();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MyLibComponent, [{
        type: Component,
        args: [{
                selector: 'ml-my-lib',
                template: `
    <p>
      my-lib works!
    </p>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();

class ButtonComponent {
    constructor() { }
    ngOnInit() {
    }
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
ButtonComponent.ɵcmp = ɵɵdefineComponent({ type: ButtonComponent, selectors: [["ml-button"]], decls: 2, vars: 0, template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, "button works!");
        ɵɵelementEnd();
    } }, styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ButtonComponent, [{
        type: Component,
        args: [{
                selector: 'ml-button',
                templateUrl: './button.component.html',
                styleUrls: ['./button.component.css']
            }]
    }], function () { return []; }, null); })();

class MyLibModule {
}
MyLibModule.ɵfac = function MyLibModule_Factory(t) { return new (t || MyLibModule)(); };
MyLibModule.ɵmod = ɵɵdefineNgModule({ type: MyLibModule });
MyLibModule.ɵinj = ɵɵdefineInjector({ imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(MyLibModule, { declarations: [MyLibComponent,
        ButtonComponent], exports: [MyLibComponent,
        ButtonComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MyLibModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    MyLibComponent,
                    ButtonComponent
                ],
                imports: [],
                exports: [
                    MyLibComponent,
                    ButtonComponent
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of my-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonComponent, MyLibComponent, MyLibModule, MyLibService };
//# sourceMappingURL=my-lib.js.map
