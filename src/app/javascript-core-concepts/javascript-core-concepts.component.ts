import { CommonModule, DatePipe, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-javascript-core-concepts',
  standalone: true,
  imports: [DatePipe, CommonModule, NgFor, MatButton],
  templateUrl: './javascript-core-concepts.component.html',
  styleUrl: './javascript-core-concepts.component.scss'
})
export class JavascriptCoreConceptsComponent {
  constructor(private httpClient: HttpClient){}
  innerHTMLExample = 'My Semantic Angular App';
  newsArticles = [
    { title: 'Angular 17 Released', body: 'New features and improvements...', date: new Date('2025-07-15') },
    { title: 'Semantic HTML Best Practices', body: 'Boost your app accessibility...', date: new Date('2025-07-10') },
  ];
  relatedLinks = [
    { label: 'Angular Docs', url: 'https://angular.io/' },
    { label: 'MDN HTML Reference', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element' },
  ];

  outputTypesInJS() {
    //console logs are used to print log in the dev tool console tab for user to know how what is getting logged
    console.log("Javascript QA ");
    console.error("Javscript QA error");
    console.warn("javascript QA warn");
    // inner HTML used for embedding html tags dynamically inside a parent tag
    this.innerHTMLExample = "<div>Inner HTML example</div>";
  }
  windowAlertOutputTypeExample() {
    // 
    // alert("Window alert");
    // document.write("Test")
    // this.toggleTheme(true);
    this.invokeHelloAPI().subscribe((response) => {
      console.log("invokeHelloAPI res", response as string);
    })

  }
  toggleTheme(isDark: boolean) {
    const classList = document.body.classList;
    if (isDark) {
      classList.add('dark-theme');
    } else {
      classList.remove('dark-theme');
    }

  }
  invokeHelloAPI() {
    return  this.httpClient.get('http://localhost:8080/hello', {responseType: 'text'});
  }

}


