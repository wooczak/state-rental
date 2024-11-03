import pkg from 'json-server';
import dayjs from "dayjs";

const { create, router: _router, defaults, bodyParser } = pkg;

const server = create();
const router = _router("db.json");
const middlewares = defaults();

server.use(middlewares);
server.use(bodyParser);

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

server.get("/cars", async (req, res) => {
  await delay(2000);

  const fromDate = dayjs(req.query.fromDate);
  const toDate = dayjs(req.query.toDate);
  const carType = req.query.carType;

  if (!fromDate.isValid() || !toDate.isValid() || !carType) {
    return res.status(400).json({ error: "Invalid parameters" });
  }

  // Fetch all cars from the db.json file
  const cars = router.db.get("cars").value();

  // Filter cars by type
  const filteredCars = cars.filter((car) => car.type === carType);

  res.json(filteredCars);
});

server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running on http://localhost:3000");
});
