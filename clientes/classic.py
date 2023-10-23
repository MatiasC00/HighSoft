from clientes.clientes import Cliente
from clientes.clientes import ExcepcionLimite

class Classic(Cliente):
    """
    Clase que representa a un cliente de tipo "Classic" en el banco.
    """

    # Definición de límites y propiedades específicas para clientes "Classic"
    limite_tarjetas_debito = 1
    limite_cajas_ahorro_pesos = 1
    limite_cajas_ahorro_dolares = 1
    retiro_maximo_diario = 10,000
    comision_transferencia_saliente = 0.001
    comision_transferencia_entrante = 0.005

    def __init__(self, numero, nombre, apellido, dni):
        """
        Inicializa un cliente de tipo "Classic".

        Args:
            numero (int): Número de cliente.
            nombre (str): Nombre del cliente.
            apellido (str): Apellido del cliente.
            dni (str): Número de documento del cliente.
        """
        super().__init__(numero, nombre, apellido, dni)
        self.tarjetas_debito = [] 
        self.cajas_ahorro_pesos = []  
        self.cajas_ahorro_dolares = []  
        self.retiro_maximo_diario = 10,000    
        self.inversiones = []  
        self.chequeras = []  

    def agregar_tarjeta_debito(self, tarjeta):
        """
        Agrega una tarjeta de débito al cliente "Classic".

        Args:
            tarjeta: Instancia de la tarjeta de débito a agregar.

        Raises:
            ExcepcionLimite: Se lanza si se alcanza el límite de tarjetas de débito.
        """
        if len(self.tarjetas_debito) < Classic.limite_tarjetas_debito:
            self.tarjetas_debito.append(tarjeta)
        else:
            raise ExcepcionLimite("Se ha alcanzado el límite de tarjetas de débito.")

    # Los otros métodos para agregar cajas de ahorro, tarjetas de crédito, etc. siguen una estructura similar.

    def realizar_retiro(self, monto):
        """
        Realiza un retiro de dinero por parte del cliente "Classic" y actualiza el límite diario.

        Args:
            monto (int): Monto a retirar.

        Returns:
            str: Mensaje indicando si el retiro fue exitoso o si excede el límite diario.
        """
        if monto <= self.retiro_maximo_diario:
            self.retiro_maximo_diario -= monto
            return f"Retiro exitoso de ${monto}."
        else:
            return "El monto excede el retiro máximo diario."
