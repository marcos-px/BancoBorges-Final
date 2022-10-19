import deleteClientUsecase from './delete.client.usecase';

test("Teste unitário DeleteClientUsecase", async() => {
    const client = {
        clientId: 0
    };
    expect(await deleteClientUsecase.execute(client)).toBeUndefined();
});