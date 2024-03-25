

export const TowerDisplay =({idx,disk}) =>{

  

  return     (
    <div key={idx} className={`disk disk${disk}`} style={{ width: `${20 + disk * 10}px`, backgroundColor: `rgb(${disk * 20}, ${disk * 30}, ${disk * 10})` }}>{disk} sdfsd</div>

    
        )
}