import { Routes } from '@angular/router';
import { JavascriptCoreConceptsComponent } from './javascript-core-concepts/javascript-core-concepts.component';
import { LoginScreenComponent } from './login-screen/login-screen/login-screen.component';

export const routes: Routes = [
    {
        path: 'JS-concept', component: JavascriptCoreConceptsComponent
    },
    {
        path: '', component: LoginScreenComponent
    }
];
