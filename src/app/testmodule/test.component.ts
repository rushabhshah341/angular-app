import { Input, Component, OnInit, OnDestroy } from '@angular/core';
import { TestService } from './test.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { MyData } from '../model/MyData';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, OnDestroy {
  private demovar = 15;
  @Input() MyData: MyData;
  private unsubscribe = new Subject<void>();
  constructor(private testService: TestService) { }
  ngOnInit() {
    this.testService.getMyData()
      .subscribe(
        (data: MyData) => {
          this.MyData = data;
        },
        err => console.error(err),
        () => {
          console.log(this.MyData, 'data loaded suucesssfully');
        }
      );
  }
  public  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
