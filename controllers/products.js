const product = require("../models/product");
const getAllProducts = async (req, res) => {
  const { company, name ,feature , sort , select } = req.query;
  const queryObject = {};
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  if (feature) {
    queryObject.feature = feature;
  }
  let apiData = product.find(queryObject);
  
  if(sort){
    let sortFix = sort.replace(",", " ");
    apiData=apiData.sort(sortFix);
  }
  if(select){
    let selectFix = select.split(",").join(" ");
    apiData=apiData.select(selectFix);
  }
  
  let page= Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 5;
  let skip = (page - 1) * limit;
  apiData=apiData.skip(skip).limit(limit);
        
  const Products = await apiData;
  res.status(200).json({ Products , nbHits: Products.length });
};

module.exports = { getAllProducts };
