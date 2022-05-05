const dijkstras = () => {
    const graph = {};
    graph.start = { a: 6, b:2}
    graph.a = {fin: 1}
    graph.b = {a :3, fin: 5}
    graph.fin = {Infinity}

    const costs = {};
    costs.a = 6;
    costs.b = 2;
    costs.fin = Infinity;

    const parents = {}
    parents.a = "start";
    parents.b = "start";
    parents.fin = null;

    let processed = [];


    const findLowestCostNode = (costs) => {
        let lowestCost = Infinity;
        let lowestCostNode = null;
        for(let node in costs) {
            let cost = costs[node];
            if((cost < lowestCost) && !processed.includes(node)) {
                lowestCost = cost;
                lowestCostNode = node;
            }
        }
       // console.log("lowestCostNode",lowestCostNode)
        return lowestCostNode
    }
    let node = findLowestCostNode(costs);

    while(node) {
        console.log("node", node)
        let cost = costs[node];
        let neighbors = graph[node];
        console.log("neighbors", neighbors)
        for(let n in neighbors) {
            let newCost = cost + neighbors[n];
            if(costs[n] > newCost) {
                costs[n] = newCost;
                parents[n] = node;
            }
        }
        processed.push(node);
        node = findLowestCostNode(costs);
    }
    //console.log(node)
    //console.log("processed", processed)
    // console.log(graph);
    // console.log(Object.keys(graph.start))

}



dijkstras();