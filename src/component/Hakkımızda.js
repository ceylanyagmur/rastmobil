import React, { useState, useEffect, useRef } from 'react';
import { classNames } from 'primereact/utils';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../service/ProductService';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';

import { Toolbar } from 'primereact/toolbar';
import { InputTextarea } from 'primereact/inputtextarea';

import { Dialog} from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';





const Hakkımızda = () => {
  let emptyProduct = {
    id: null,
    name: '',
    image: null,
    description: '',
    category: null,
    price: 0,
    quantity: 0,
    rating: 0,
    inventoryStatus: 'INSTOCK'
};
const [products, setProducts] = useState(null);
const [productDialog, setProductDialog] = useState(false);

const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
const [product, setProduct] = useState(emptyProduct);
const [selectedProducts, setSelectedProducts] = useState(null);
const [submitted, setSubmitted] = useState(false);
const [globalFilter, setGlobalFilter] = useState(null);
const toast = useRef(null);
const dt = useRef(null);

useEffect(() => {
  ProductService.getProducts().then((data) => setProducts(data));
}, []);

const formatCurrency = (value) => {
  return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};

const openNew = () => {
  setProduct(emptyProduct);
  setSubmitted(false);
  setProductDialog(true);
};

const hideDialog = () => {
  setSubmitted(false);
  setProductDialog(false);
};


const saveProduct = () => {
  setSubmitted(true);

  if (product.name.trim()) {
      let _products = [...products];
      let _product = { ...product };

      if (product.id) {
         
          toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
      } else {
        
          _product.image = 'product-placeholder.svg';
          _products.push(_product);
          toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
      }

      setProducts(_products);
      setProductDialog(false);
      setProduct(emptyProduct);
  }
};


const confirmDeleteSelected = () => {
  setDeleteProductsDialog(true);
};



const onInputChange = (e, name) => {
  const val = (e.target && e.target.value) || '';
  let _product = { ...product };

  _product[`${name}`] = val;

  setProduct(_product);
};
//  ınputların yazılmasını saglıyor
const onInputNumberChange = (e, name) => {
  const val = e.value || 0;
  let _product = { ...product };

  _product[`${name}`] = val;

  setProduct(_product);
};

// silme
const leftToolbarTemplate = () => {
  return (
      <div className="flex flex-wrap  gap-2" >
          <Button className="b" label="Yeni Hesap Ekle" icon="pi pi-plus"  onClick={openNew}  style={{borderRadius:"100px"}} />
          <span  >
          <InputText className="c" type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search objects..."style={{borderRadius:"100px"}} />
      
       
         
          </span>
      </div>
  );
};


 // popup
 const productDialogFooter = (
  <React.Fragment>
      <Button label="vazgeç" outlined onClick={hideDialog} style={{borderRadius:"100px"}}/>
      <Button label="kaydet"  onClick={saveProduct} style={{borderRadius:"100px"}} />
  </React.Fragment>
);






  return (
   
    <div >
           
     <div> 
            <Toast ref={toast}   />
            <div className="card"  > 

           
                <Toolbar className="mb-4" left={leftToolbarTemplate}  ></Toolbar>
               
                <DataTable  ref={dt} value={products} selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)}
                        dataKey="id"  paginator rows={5} rowsPerPageOptions={[5, 10, 25]}  stripedRows 
                        paginatorTemplate="RowsPerPageDropdown  PrevPageLink CurrentPageReport NextPageLink "    globalFilter={globalFilter} 
                     > 
                    
                  <Column field="code" header="Sosyal Medya Linki" sortable  style={{ minWidth: '16rem'}}></Column>
                    <Column field="name" header="Sosyal Medya Adı" sortable  style={{ minWidth: '16rem' }}></Column>
                    
                    <Column field="description" header="Açıklama" sortable style={{ minWidth: '16rem' }}></Column>
                   
                    </DataTable>
               
            </div> 
{/* popup*/}
            <Dialog visible={productDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} modal className="p-fluid" footer={productDialogFooter} onHide={hideDialog}>
            <div className="field"  >
                    <label htmlFor="name" className="font-bold">
                    Sosyal Medya Linki
                    </label>
                    <InputText id="name" value={product.code} onChange={(e) => onInputChange(e, 'code')} required autoFocus className={classNames({ 'p-invalid': submitted && !product.code })} style={{borderRadius:"100px"}}/>
                    {submitted && !product.code && <small className="p-error">Name is required.</small>}
                </div>
                <div className="field">
                    <label htmlFor="name" className="font-bold">
                    Sosyal Medya Adı
                    </label>
                    <InputText id="name" value={product.name} onChange={(e) => onInputChange(e, 'name')} required autoFocus className={classNames({ 'p-invalid': submitted && !product.name })}style={{borderRadius:"100px"}} />
                    {submitted && !product.name && <small className="p-error">Name is required.</small>}
                </div>
                <div className="field">
                    <label htmlFor="description" className="font-bold">
                    Açıklama
                    </label>
                    <InputTextarea id="description" value={product.description} onChange={(e) => onInputChange(e, 'description')} required rows={3} cols={20}  style={{borderRadius:"100px"}}/>
               
                    
                </div>

                </Dialog>
        </div> 
        </div>
   
  )
}
export default Hakkımızda;