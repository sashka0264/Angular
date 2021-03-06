1. Binding - привязка динамики к шаблону. 
Односторонний binding:
а) Когда мы что-то из ts-документа привязываем к html-документу. []
С помощью записи вида [src]="url" указываем, что src будет динамически меняться. 
б) Когда мы что-то из html-документа привязываем к ts-документу (это Event Binding). ()
С помощью круглых скобок вида (click) указываем события для обратного binding. 
Двухсторонний binding:
а) Когда мы связываем значение в ts-документе с html-документом. И изменения будут отображаться в обоих местах.
b) Делаем проще, подключаем FormsModule и делаю в html запись вида [(ngModel)]="title" для инпута, сразу указывая переменную,
с которой будет происходить связывание.
2. Аналог React.ref - #myInput - так мы делаем локальную ссылку на этот элемент и можем использовать 
эту ссылку в любом месте html-документа или передавать куда-либо.
3. Директива ngStyle/ngClass для динамической манипуляции стилями, пример: [ngStyle]="{color: title.length > 6 ? 'red' : 'blue'}"
и [ngClass]="{'red' : title.length < 7, 'blue': title.length > 6}
4. Если мы хотим изменять шаблон, то *. Структурная директива *ngIf: *ngIf="toggle" и *ngIf="!toggle". 
Или более коротко: <p *ngIf="toggle; else myP">Hello</p><ng-template #myP><p>End</p></ng-template>.
5. *ngFor, пример: <div *ngFor="let x of arr">{{x}}</div>
6. Pipes, пример использования pipe date: {{now | date}}, где now - какая-то переменная = new Date(). С их помощью мы трансформируем
отображение какого-либо элемента.
7. Аналогично подходу Redux, в Angular в @Component можно изменить стратегию с changeDetection: ChangeDetectionStrategy.Default на 
changeDetection: ChangeDetectionStrategy.OnPush. В таком случае мы будем реагировать только на изменения Инпутов, либо если мы
сделаем ссылку на уже новый обьект.