import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Iuser } from 'src/app/models/user';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-test-a',
  templateUrl: './test-a.component.html',
  styleUrls: ['./test-a.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestAComponent implements OnInit {
  users: Iuser[] = [];
  filteredUsers: Iuser[] = [];
  subscription = new Subscription();
  searchTerm: string;
  counter = 0;
  constructor(private showtell: TestService, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getUsers();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getUsers(): void {
    this.subscription.add(
      this.showtell.getusers().subscribe({
        next: (res) => {
          this.users = res;
          this.filteredUsers = this.users;
        console.log(this.filteredUsers)
        },
      })
    );
  }

  filterUsers() {
    if (this.searchTerm) {
      this.filteredUsers = [...this.users.filter((user) =>
        user.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      )];
    } else {
      this.filteredUsers = [...this.users];
      
      
    }
   
    this.counter++;
    
  }
}
