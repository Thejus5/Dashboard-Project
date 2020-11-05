console.log('Loaded')

let projectTechChart = document.getElementById('chartOne').getContext('2d');
let projectResChart = document.getElementById('chartTwo').getContext('2d');

let projecttech = new Chart(projectTechChart,{
  type:'bar',
  data:{
    labels:['Onety onety one','Two','Three','Four','Five','six','seven','eight','nine','ten'],
    datasets:[{
      label:'Population',
      data:[10,30,50,5,48,65,1,63,25,8],
      backgroundColor: '#49d8a0'
    }]
  },
  options:{
    tooltips:{
      backgroundColor:'#dbf7ec',
      titleFontColor: '#49d8a0',
      bodyFontColor: '#49d8a0'
    }
  }
})

let projectRes = new Chart(projectResChart,{
  type:'line',
  data:{
    labels:['One','Two','Three','Four','Five'],
    datasets:[{
      label:'Population',
      data:[10,30,50,5,48],
      backgroundColor: 'transparent',
      borderColor:'#49d8a0'
    }]
  },
  options:{}
})