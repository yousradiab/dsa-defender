export default class SinglyLinkedList {
    head = null;

    // Der opretter en ny node, med link til data-objektet, og tilføjer den til listen
    add(enemy) {
        const node = new Node(enemy);
        if (this.head == null) {
            // hvis listen er tom
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }

    // Der finder en node med link til dét data-objekt, og fjerner den noden.
    remove(data) {
        const nodeToRemove = this.getNodeWith(data);
        if (nodeToRemove) {
            console.log(nodeToRemove);
            this.removeNode(nodeToRemove);
        }
    }

    // Der returnerer data i den første node i listen
    getFirst() {
        const node = this.getFirstNode();
        // tjek om der er en node - hvis ikke returner null
        return node ? node.data : null;
    }

    // Der returnerer data-objektet på det pågældende index i listen.
    getLast() {
        let current = this.head;
        // hvis listen er tom returner null
        if (!current) return null;

        while (current.next !== null) {
            current = current.next;
        }
        return current.data;
    }

    // der returnerer den første node i listen
    getFirstNode() {
        return this.head;
    }

    // Der returnerer noden efter denne (eller null, hvis der ikke er nogen)
    getNextNode(node) {
        // hvis der ikke er nogen node returner null
        return node ? node.next : null;
    }

    // Der returnerer den sidste node i listen
    getLastNode() {
        let current = this.head;
        // hvis listen er tom returner null
        if (!current) return null;

        while (current.next !== null) {
            current = current.next;
        }
        return current;
    }

    // Der returnerer den node der linker til dette data-objekt
    getNodeWith(data) {
        let current = this.head;
        while (current !== null) {
            if (current.data == data) {
                return current;
            }
            current = current.next;
        }
        // hvis der ikke er nogen node der linker til dette data-objekt returner null
        return null;
    }

    // der fjerner den første node fra listen
    removeFirstNode() {
        if (this.head) {
            this.head = this.head.next;
        }
    }

    // Der fjerner den sidste node fra listen
    removeLastNode() {
        // hvis listen er tom returner null
        if (!this.head) return;

        if (!this.head.next) {
            // hvis der kun er en node i listen
            this.head = null;
            return;
        }

        let current = this.head;
        // hvis der er flere end én node i listen
        while (current.next.next !== null) {
            current = current.next;
        }
        // fjerner den sidste node
        current.next = null;
    }

    // Der fjerner dén node fra listen
    removeNode(node) {
        // Hvis noden der skal fjernes er head
        if (this.head === node) {
            this.head = this.head.next;
            return;
        }

        // Finder noden før den, der skal fjernes
        let current = this.head;
        while (current.next && current.next !== node) {
            current = current.next;
        }

        // Hvis vi fandt den node, der skal fjernes
        if (current.next === node) {
            current.next = node.next;
        }
    }

    // der fjerner alle nodes fra listen, og sørger for at den er tom
    clear() {
        this.head = null;
    }

    // der returnerer antallet af nodes i listen
    size() {
        let count = 0;
        let current = this.head;
        while (current !== null) {
            count++;
            current = current.next;
        }
        return count;
    }

    // der console.log'er alle data-elementer i listen
    dumpList() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }
}

class Node {
    next; // den peger hen på næste node
    data; // den peger hen på data som er enemy i dette tilfælde

    constructor(data) {
        this.data = data;
        this.next = null;
    }
}