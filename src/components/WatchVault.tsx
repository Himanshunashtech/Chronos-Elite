
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Trash2, Eye, DollarSign, Calendar, StickyNote } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";

interface WatchVaultItem {
  id: string;
  name: string;
  brand: string;
  price: string;
  image: string;
  notes: string;
  dateAdded: Date;
  category: 'investment' | 'gift' | 'personal' | 'event';
}

const WatchVault = () => {
  const [vaultItems, setVaultItems] = useState<WatchVaultItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<WatchVaultItem | null>(null);
  const [editingNotes, setEditingNotes] = useState('');

  useEffect(() => {
    // Load from localStorage on component mount
    const savedVault = localStorage.getItem('chronos-vault');
    if (savedVault) {
      const parsed = JSON.parse(savedVault);
      setVaultItems(parsed.map((item: any) => ({
        ...item,
        dateAdded: new Date(item.dateAdded)
      })));
    }
  }, []);

  useEffect(() => {
    // Save to localStorage whenever vaultItems changes
    localStorage.setItem('chronos-vault', JSON.stringify(vaultItems));
  }, [vaultItems]);

  const addToVault = (watch: Omit<WatchVaultItem, 'id' | 'dateAdded' | 'notes'>) => {
    const newItem: WatchVaultItem = {
      ...watch,
      id: Date.now().toString(),
      dateAdded: new Date(),
      notes: ''
    };
    
    setVaultItems(prev => [...prev, newItem]);
  };

  const removeFromVault = (id: string) => {
    setVaultItems(prev => prev.filter(item => item.id !== id));
    if (selectedItem?.id === id) {
      setSelectedItem(null);
    }
  };

  const updateNotes = (id: string, notes: string) => {
    setVaultItems(prev => prev.map(item => 
      item.id === id ? { ...item, notes } : item
    ));
    if (selectedItem?.id === id) {
      setSelectedItem({ ...selectedItem, notes });
    }
  };

  const updateCategory = (id: string, category: WatchVaultItem['category']) => {
    setVaultItems(prev => prev.map(item => 
      item.id === id ? { ...item, category } : item
    ));
    if (selectedItem?.id === id) {
      setSelectedItem({ ...selectedItem, category });
    }
  };

  const getCategoryColor = (category: WatchVaultItem['category']) => {
    const colors = {
      investment: 'bg-green-500/20 text-green-400',
      gift: 'bg-pink-500/20 text-pink-400',
      personal: 'bg-blue-500/20 text-blue-400',
      event: 'bg-purple-500/20 text-purple-400'
    };
    return colors[category];
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[#D4AF37] mb-2">Your Watch Vault</h2>
        <p className="text-gray-400">Your curated collection of timepiece aspirations</p>
      </div>

      {vaultItems.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-20"
        >
          <Heart className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <p className="text-gray-400 text-lg mb-4">Your vault is empty</p>
          <p className="text-sm text-gray-500">Start adding watches to your wishlist from our collections</p>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vaultItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-xl p-6 group hover:scale-105 transition-all duration-300"
            >
              <div className="relative mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-contain rounded-lg"
                />
                <Badge 
                  className={`absolute top-2 right-2 ${getCategoryColor(item.category)}`}
                >
                  {item.category}
                </Badge>
              </div>

              <h3 className="font-semibold text-[#D4AF37] mb-1">{item.brand}</h3>
              <p className="text-white text-sm mb-2">{item.name}</p>
              <p className="text-[#D4AF37] font-bold mb-3">{item.price}</p>

              <div className="flex items-center text-xs text-gray-400 mb-4">
                <Calendar className="w-3 h-3 mr-1" />
                Added {item.dateAdded.toLocaleDateString()}
              </div>

              {item.notes && (
                <div className="mb-4">
                  <div className="flex items-start gap-2">
                    <StickyNote className="w-3 h-3 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-gray-300 line-clamp-2">{item.notes}</p>
                  </div>
                </div>
              )}

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSelectedItem(item);
                    setEditingNotes(item.notes);
                  }}
                  className="flex-1 border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/10"
                >
                  <Eye className="w-3 h-3 mr-1" />
                  View
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => removeFromVault(item.id)}
                  className="border-red-500/30 text-red-400 hover:bg-red-500/10"
                >
                  <Trash2 className="w-3 h-3" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Detailed View Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.name}
                    className="w-full h-64 object-contain rounded-lg mb-4"
                  />
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-[#D4AF37]">{selectedItem.brand}</h3>
                    <p className="text-white">{selectedItem.name}</p>
                    <p className="text-[#D4AF37] text-xl font-bold">{selectedItem.price}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#D4AF37] mb-2">
                      Category
                    </label>
                    <select
                      value={selectedItem.category}
                      onChange={(e) => updateCategory(selectedItem.id, e.target.value as WatchVaultItem['category'])}
                      className="w-full bg-white/5 border border-white/10 rounded-md p-2 text-white"
                    >
                      <option value="investment">Investment</option>
                      <option value="gift">Gift Idea</option>
                      <option value="personal">Personal</option>
                      <option value="event">Event Match</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#D4AF37] mb-2">
                      Personal Notes
                    </label>
                    <Textarea
                      value={editingNotes}
                      onChange={(e) => setEditingNotes(e.target.value)}
                      placeholder="Add your thoughts, investment notes, or occasion details..."
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 h-32"
                    />
                  </div>

                  <div className="flex gap-3">
                    <Button
                      onClick={() => {
                        updateNotes(selectedItem.id, editingNotes);
                        setSelectedItem(null);
                      }}
                      className="flex-1 bg-[#D4AF37] text-black"
                    >
                      Save Changes
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setSelectedItem(null)}
                      className="border-white/20 text-white"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WatchVault;

// Export function to add watches to vault from other components
export const addWatchToVault = (watch: {
  name: string;
  brand: string;
  price: string;
  image: string;
  category?: WatchVaultItem['category'];
}) => {
  const savedVault = localStorage.getItem('chronos-vault');
  const currentVault = savedVault ? JSON.parse(savedVault) : [];
  
  const newItem: WatchVaultItem = {
    id: Date.now().toString(),
    name: watch.name,
    brand: watch.brand,
    price: watch.price,
    image: watch.image,
    notes: '',
    dateAdded: new Date(),
    category: watch.category || 'personal'
  };
  
  const updatedVault = [...currentVault, newItem];
  localStorage.setItem('chronos-vault', JSON.stringify(updatedVault));
  
  return newItem;
};
