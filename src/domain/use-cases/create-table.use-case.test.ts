import {CreateTable} from './create-table.use-case';

describe('CreateTableUseCase', () => {
    
    test('should create table with default values', () => {

        // default options

        const createTable = new CreateTable();

        const table = createTable.execute({base: 10});
        const rows = table.split('\n').length;
       
        expect(createTable).toBeInstanceOf(CreateTable);
        expect(table).toContain('10 x 1 = 10');
        expect(table).toContain('10 x 2 = 20');
        expect(rows).toBe(10);

    });

    test('should create table with custom values', () => {

        const createTable = new CreateTable();

        const options = {
            base: 3,
            limit: 20
        }
        
        const table = createTable.execute(options);
        const rows = table.split('\n').length;
        
        expect(table).toContain('3 x 1 = 3');
        expect(table).toContain('3 x 20 = 60');
        expect(rows).toBe(options.limit);


    });

});





