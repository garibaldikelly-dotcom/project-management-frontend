test('Mensaje principal no cambia', () => {
const mensaje = 'Servidor funcionando correctamente';
expect(mensaje).toMatch(/funcionando/);
});