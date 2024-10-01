export default function getNeighborhoodsList() {
    this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];
  
    const self = this;
    setTimeout(
        (newNeighborhood) => {
            self.sanFranciscoNeighborhoods.push(newNeighborhood);
        },
        0
    )
}