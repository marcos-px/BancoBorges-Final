import listClientUsecase from './list.client.usecase';

test("Teste unitário ListClientUsecase", async() => {
    expect(await listClientUsecase.execute()).toEqual([]);
});