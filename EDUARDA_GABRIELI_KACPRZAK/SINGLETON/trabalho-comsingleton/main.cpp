#include <iostream>
#include <vector>
#include <string>
#include <limits>

class TaskList {
private:
    std::vector<std::string> tasks;
    static TaskList* instance;

    // construtor privado
    TaskList() {}

    // impedir cópia
    TaskList(const TaskList&) = delete;
    TaskList& operator=(const TaskList&) = delete;

public:
    static TaskList* getInstance() {
        if (instance == nullptr) {
            instance = new TaskList();
        }
        return instance;
    }

    void addTask() {
        std::string task;
        std::cout << "Digite a nova tarefa: ";
        std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n');
        std::getline(std::cin, task);
        tasks.push_back(task);
        std::cout << "Tarefa adicionada com sucesso!\n";
    }

    void removeTask() {
        if (tasks.empty()) {
            std::cout << "Não há tarefas para remover!\n";
            return;
        }

        displayTasks();
        int index;
        std::cout << "Digite o número da tarefa que deseja remover: ";
        std::cin >> index;

        if (index >= 0 && index < tasks.size()) {
            tasks.erase(tasks.begin() + index);
            std::cout << "Tarefa removida com sucesso!\n";
        } else {
            std::cout << "Índice inválido!\n";
        }
    }

    void displayTasks() {
        if (tasks.empty()) {
            std::cout << "Não há tarefas na lista.\n";
            return;
        }

        std::cout << "\n=== Lista de Tarefas ===\n";
        for (size_t i = 0; i < tasks.size(); i++) {
            std::cout << i << ". " << tasks[i] << "\n";
        }
        std::cout << "=====================\n";
    }
};

// inicialização do ponteiro estático
TaskList* TaskList::instance = nullptr;

int main() {
    TaskList* myTasks = TaskList::getInstance();
    int choice;

    while (true) {
        std::cout << "\nMenu:\n";
        std::cout << "1. Adicionar tarefa\n";
        std::cout << "2. Remover tarefa\n";
        std::cout << "3. Mostrar tarefas\n";
        std::cout << "4. Sair\n";
        std::cout << "Escolha uma opção: ";

        std::cin >> choice;

        switch (choice) {
            case 1:
                myTasks->addTask();
                break;
            case 2:
                myTasks->removeTask();
                break;
            case 3:
                myTasks->displayTasks();
                break;
            case 4:
                std::cout << "Programa finalizado!\n";
                return 0;
            default:
                std::cout << "Opção inválida!\n";
        }
    }

    return 0;
}