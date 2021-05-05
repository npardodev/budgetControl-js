const TEMPLATE_TABLERO = `
<section>
	<div class="container">

		<div class="row">
						<div class="col-lg-3 d-flex stat mx-auto my-3 justify-content-around">
															
						<div class="row px-1">
							<h2 id="KEY_BOARD_SubsTitle" class="text-muted">Revisa la última informacion</h2>
							<img src="./img/tablero.svg" alt="Imagen tablero" width="200" height="200">
						</div>
					</div>
					<div class="col-lg-6 my-3">
						<div class="card d-flex">
							<div class=" card-header  align-self-center">
								<h5 id="KEY_BOARD_Cant_Operac_Title">Cantidad de operaciones:</h5>
							</div>
							<div class="card-body">

								<div class="col d-flex stat mx-auto my-3 justify-content-around">
									<h6 id="KEY_BOARD_Cant_Operac_Subtitle_expenses">Gastos: </h6>
									<h6 id="cantidadGastos" class="text-muted">0</h6>
								</div>
								
								<div class="col d-flex stat mx-auto my-3 justify-content-around">
									<h6 id="KEY_BOARD_Cant_Operac_Subtitle_income">Ingresos: </h6>
									<h6 id="cantidadIngresos" class="text-muted">0</h6>
								</div>
							</div>
						</div>
					</div>
			</div>
	</div>
</section>
`;