

//selection sort
let arrNotSort = [9,12,12,34,11,14,16]
const bi = [0,1,1,1,1,0,0,0,1,1]


function selectionSort (arr) {
  for(let i = 0; i < arr.length - 1; i++) { //не считаем последний элемент
    let min = i // сюда клвдем индекс ноль
    for(let j = i + 1; j < arr.length; j++) { //тут начинаем перебирать со следующего элемента так как первый положили в min
      if(arr[j] < arr[min]) { //Сравниваем элемнты и меняем значение min
        min = j
      }
    }
    let t = arr[min]
    arr[min] = arr[i]
    arr[i] = t //тут переставляем значения
  }
  return arr
}

//Bubble sort Сортировка пузырьком

function bubbleSort (arr) {
  for (let i = 0; i < arr.length; i++) {
    /*
    * arr.length - i уменьшаем длинны так как мы ставим наибольшее число в конец
    * */
    for( let k =  1; k < arr.length - i;k++) {
      if(arr[k] < arr[k -1]) {
        let out = arr[k - 1]
        arr[k - 1] = arr[k]
        arr[k] = out
      }
    }
  }
  return arr
}

// console.log(bubbleSort(bi))

// Insertion sort Сортировка вставкой

function insertionSort (arr) {
  for (let i = 0; i < arr.length; i++) {
    for(let k = 1;k < arr.length; k++) {
      if(arr[k - 1] > arr[k]) {
        let out = arr[k - 1]
        arr[k - 1] = arr[k]
        arr[k] = out
      }
    }
  }
  return arr
}

// console.log(insertionSort(arrNotSort))

//Сортировка подсчетом

function countingSort (arr) {
  let result = []
  let min = arr[0]
  let max = arr[0]
  for (let i = 0; i < arr.length; i++) {
    //ищем min max
    if(arr[i] > max) {
      max = arr[i]
    }
    if(arr[i] < min) {
      min = arr[i]
    }
  }
  // Создаем массив для сортировки
  const bucket = Array(max - min + 1).fill(0)
  for (let k = 0; k < arr.length; k++) {
    // - min для смещения индексов влево что б начинать сортировку с минимального значения а не с 0 индекса
    bucket[arr[k] - min]++
  }
  //Полуем числа и их кол-во
  for(let j = 0; j < bucket.length; j++) {
    let count = bucket[j]
    for (let n = 0; n < count; n++) {
      result.push(j + min)
    }
  }
  return result
}

// console.log(countingSort(arrNotSort))

//Сортировка слиянием Merge sort


const left = [1,3,5,9]
const right = [2,4,6,8,10,12]


//Функция для слияния двух отсортированных массивов
function merge (leftArray, rightArray) {
  /*
  * Создаем переменнмые leftIndex rightIndex
  * Пока кладем туда ноль
  * Далее храним индексы массива
  * Array Merged для результата слияния(отсортированный массив)
  * */
  let leftIndex = 0
  let rightIndex = 0
  const merged = []
  /*
  * Создаем цыкл while и в условии прверяем чтоб наши leftIndex rightIndex не привышалои длинну массивов
  * While позволяет избежать вложенного массива
  * */
  while(leftIndex < leftArray?.length && rightIndex < rightArray?.length) {
    /*
    * Сравниваем элементы массива и клвдем в merged
    * */
    if(leftArray[leftIndex] < rightArray[rightIndex]) {
      merged.push(leftArray[leftIndex])
      leftIndex++
    } else {
      merged.push(rightArray[rightIndex])
      rightIndex++
    }
  }
  /*
  * Левый массив может оказаться длинее правого(как пример)
  * Для этого сделаем еще два цыкла while для того чтобы запушить элементры в массив с результатом
  * */
  while (leftIndex < leftArray?.length) {
    merged.push(leftArray[leftIndex])
    leftIndex++
  }
  while (rightIndex < rightArray?.length) {
    merged.push(rightArray[rightIndex])
    rightIndex++
  }
  return merged
}



function mergeSort (array) {
  if(!array || !array.length) return null

  if(array.length <= 1)  return array


  /*
  * Находим Середину массива
  * */
  let n = Math.round(array.length / 2)
  /*
  разбиваем массив на двое
  */
  const left = array.slice(0, n)
  const right = array.slice(n)

  return merge(mergeSort(left),mergeSort(right))
}

console.log(mergeSort(bi))






