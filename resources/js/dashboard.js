import utils from './utils.js'
import apis from './api.js'


let apiPromise = new Promise((resolve, reject) => {
  let allProjectDetails, allResourceDetails
  apis.getAPI('get', utils.resourceAPI, utils.secretKey, true, (allResources) => {
    allResourceDetails = allResources

    apis.getAPI('get', utils.projectAPI, utils.secretKey, true, (allProjects) => {
      allProjectDetails = allProjects

      if (allProjectDetails && allResourceDetails && allProjectDetails.length > 0 && allResourceDetails.length > 0) {
        resolve([allProjectDetails, allResourceDetails])
      }
      else {
        reject('Server sleepy')
      }

    })
  })

})

apiPromise.then((detailsArray) => {
  // detailsArray[0] will be projects
  // detailsArray[1] will be resources
  console.log(detailsArray)

  let totalProjects = detailsArray[0].length
  let totalEmployees = detailsArray[1].length

  document.querySelector('.projects-card .card-number').innerHTML = singleToDouble(totalProjects)
  document.querySelector('.total-employee-card .card-number').innerHTML = singleToDouble(totalEmployees)

  let billableEmployees = detailsArray[1].filter((resource) => resource.billable === 'True')
  let shadowEmployees = detailsArray[1].filter((resource) => resource.billable === 'False')

  document.querySelector('.employees-billable-card .card-number').innerHTML = singleToDouble(billableEmployees.length)
  document.querySelector('.employees-shadow-card .card-number').innerHTML = singleToDouble(shadowEmployees.length)

  dynamicTech(detailsArray[0])
  


})
  .catch((msg) => {
    console.log(msg)
  })

// Converts single digit numbers to double by adding zero
function singleToDouble(num) {
  let n = String(num)
  if (n.length == 1) n = '0' + n

  return n
}

// Function to create tech and number of projects list
function dynamicTech(projects) {

  let techList = {}
  projects.forEach((project) => {
    project.tech_used.forEach((tech) => {
      if (Object.keys(techList).includes(tech)) techList[tech] += 1
      else techList[tech] = 1
    })
  })

  let listBox = document.querySelector('.tech-list')
  Object.keys(techList).forEach((techs) => {
    let list = document.createElement('div')
    list.className = 'list-element flex-box'

    let p1 = document.createElement('p')
    let p2 = document.createElement('p')
    p2.className = 'project-count'
    p1.innerHTML = techs
    p2.innerHTML = techList[techs]

    list.appendChild(p1)
    list.appendChild(p2)

    listBox.appendChild(list)
  })
}


/*---------------- Hamburger -----------------------------*/
let hamburger = document.querySelector('.mobile-hamburger')
let sidePanel = document.querySelector('.side-panel')
let backBtn = document.querySelector('.back-arrow')

hamburger.addEventListener('click', () => {
  toggleSidebar()
})

backBtn.addEventListener('click', () => {
  toggleSidebar()
})

function toggleSidebar() {
  sidePanel.classList.toggle('active-sidebar')
}

/*---------------- Chart making -----------------------------*/
let projectTechChart = document.getElementById('chartOne').getContext('2d');
let projectResChart = document.getElementById('chartTwo').getContext('2d');

let PvTdetails = [
  ['Onety', 'Two', 'Three', 'Four', 'Five', 'six', 'seven', 'eight', 'nine', 'ten'],
  'Projects', [10, 30, 50, 5, 48, 65, 1, 63, 25, 8], '#49d8a0', 'transparent'
]

utils.chartMaker(projectTechChart, 'bar', PvTdetails)
utils.chartMaker(projectResChart, 'line', PvTdetails)
