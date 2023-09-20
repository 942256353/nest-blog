import { Module } from '@nestjs/common';
import { TestService } from './test.service';

@Module({
  providers: [TestService,{
    provide:'test',
    useValue:'这是测试的test'
  }],
  exports: [TestService,'test'],
})
export class TestModule {}

// TestModule.prototype._module = [
//   {
//     provide: TestService,
//     useClass: TestService,
//     export: true
//   }
// ]