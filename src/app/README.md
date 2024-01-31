# Angular Routing

## Binding router information to the routed inputs component
https://netbasal.com/binding-router-information-to-routed-component-inputs-in-angular-78ee92f63e64


## Passing parameters without adding them to URL
Send:

```typescript
import {inject} from "@angular/core";

router = inject(Router);

this.router.navigate(['/path'], {state: {data: 'some data'}});
```

Receive:
```typescript
import {inject} from "@angular/core";

router = inject(Router);

this.router.getCurrentNavigation().extras.state.data;
```
