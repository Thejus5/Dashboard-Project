console.log('Loaded')

let projectTechChart = document.getElementById('chartOne').getContext('2d');
let projectResChart = document.getElementById('chartTwo').getContext('2d');

let projecttech = new Chart(projectTechChart,{
  type:'bar',
  data:{
    labels:['One','Two','Three','Four','Five'],
    datasets:[{
      label:'Population',
      data:[10,30,50,5,48]
    }]
  },
  options:{}
})

let projectRes = new Chart(projectResChart,{
  type:'line',
  data:{
    labels:['One','Two','Three','Four','Five'],
    datasets:[{
      label:'Population',
      data:[10,30,50,5,48]
    }]
  },
  options:{}
})