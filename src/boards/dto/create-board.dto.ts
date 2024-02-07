// 클래스는 인터페이스와 다르게 런타임에서 작동하기 때문에

import { IsNotEmpty } from 'class-validator';

// 파이프와 같은 기능을 이용할 때 더 유용
export class CreateBoardDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
