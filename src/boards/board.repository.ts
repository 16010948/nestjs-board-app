import { Repository } from 'typeorm';
import { Board } from './board.entity';
import { TypeormRepository } from '../common/custom/decorator/typeorm-repository.decorator';
import { BoardStatus } from './board-status.enum';
import { CreateBoardDto } from './dto/create-board.dto';

@TypeormRepository(Board)
export class BoardRepository extends Repository<Board> {
  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    const { title, description } = createBoardDto;

    const board: Board = this.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
    });
    await this.save(board);
    return board;
  }
}
